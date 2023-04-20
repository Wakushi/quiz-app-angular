import { Component, OnInit, ViewChildren, QueryList } from "@angular/core"
import { QuestionsService } from "../../services/questions.service"
import { Observable } from "rxjs"
import { QuestionSet } from "../../models/QuestionSet"
import { QuestionSetComponent } from "../../components/question-set/question-set.component"

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
    areAllQuestionsAnswered: boolean = false

    ngOnInit(): void {
        window.scrollTo(0, 0)
        this.currentQuestionnary$ = this.questionsService.currentQuestionnary$
    }

    onValidateAnswers(): void {
        if (this.areAllAnswersSelected()) {
            this.displayResults()
            this.calculatePoints()
            this.areAnswersValidated = true
            window.scrollTo(0, 0)
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
        this.areAllQuestionsAnswered = !this.areAllQuestionsAnswered
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

    onAnswerSelect(): void {
        if (this.areAllAnswersSelected()) {
            this.areAllQuestionsAnswered = true
        }
    }
}
