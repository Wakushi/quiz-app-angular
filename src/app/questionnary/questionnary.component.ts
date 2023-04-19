import { Component, OnInit, ViewChildren, QueryList } from "@angular/core"
import { QuestionsService } from "../services/questions.service"
import { Observable } from "rxjs"
import { QuestionSet } from "../models/QuestionSet"
import { QuestionSetComponent } from "../question-set/question-set.component"

@Component({
    selector: "app-questionnary",
    templateUrl: "./questionnary.component.html",
    styleUrls: ["./questionnary.component.scss"],
})
export class QuestionnaryComponent implements OnInit {
    @ViewChildren(QuestionSetComponent)
    questionSets!: QueryList<QuestionSetComponent>

    constructor(private questionsService: QuestionsService) {}

    currentQuestionnary$!: Observable<QuestionSet[]>
    answerPoints: number = 0
    areAnswersValidated: boolean = false

    ngOnInit(): void {
        window.scrollTo(0, 0)
        this.currentQuestionnary$ = this.questionsService.currentQuestionnary$
    }

    onValidateAnswers(): void {
        if (this.areAllAnswersSelected()) {
            this.displayResults()
            this.calculatePoints()
            console.log("Points : ", this.answerPoints)
            this.areAnswersValidated = true
            window.scrollTo(0, 0)
        } else {
            console.log("Answer all questions !")
        }
    }

    displayResults(): void {
        this.questionSets.forEach((questionSet: QuestionSetComponent) => {
            questionSet.applyResultStyles()
        })
    }

    calculatePoints(): void {
        this.questionSets.forEach((questionSet: QuestionSetComponent) => {
            this.answerPoints += questionSet.answerPoint
        })
    }

    onContinue(): void {
        this.questionsService.getQuestionsData()
        this.currentQuestionnary$ = this.questionsService.currentQuestionnary$
        this.areAnswersValidated = !this.areAnswersValidated
    }

    areAllAnswersSelected(): boolean {
        let areAllSelected: boolean = true
        if (this.questionSets) {
            this.questionSets.forEach((questionSet: QuestionSetComponent) => {
                if (questionSet.selectedAnswerId === undefined) {
                    areAllSelected = false
                }
            })
        }
        return areAllSelected
    }
}
