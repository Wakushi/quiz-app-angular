import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable, map } from "rxjs"
import { QuestionSet } from "../models/QuestionSet"
import { AnswerObj } from "../models/AnswerObj"
import { Router } from "@angular/router"
import { OpenTDBRaw } from "../interfaces/OpenTDB-raw.interface"
import { OpenTDBQuestionnary } from "../interfaces/OpenTDB-questionnary.interface"

@Injectable({
    providedIn: "root",
})
export class QuestionsService {
    constructor(private http: HttpClient, private router: Router) {}
    selectedTheme!: number
    selectedDifficulty: string = "easy"
    currentQuestionnary$!: Observable<QuestionSet[]>

    onSelectTheme(themeId: number): void {
        this.selectedTheme = themeId
    }

    decodeHtmlEntities(text: string) {
        const textArea = document.createElement("textarea")
        textArea.innerHTML = text
        return textArea.value
    }

    getQuestionsData(): void {
        this.currentQuestionnary$ = this.http
            .get<OpenTDBRaw>(
                `https://opentdb.com/api.php?amount=5&category=${this.selectedTheme}&difficulty=${this.selectedDifficulty}&type=multiple`
            )
            .pipe(
                map((data: OpenTDBRaw) => {
                    const questionnary: QuestionSet[] = []

                    data.results.forEach(
                        (questionItem: OpenTDBQuestionnary) => {
                            const answers: AnswerObj[] = []
                            const correctAnswer: AnswerObj = {
                                id: `good-${this.decodeHtmlEntities(
                                    questionItem.correct_answer
                                )}`,
                                answer: this.decodeHtmlEntities(
                                    questionItem.correct_answer
                                ),
                            }
                            answers.push(correctAnswer)
                            questionItem.incorrect_answers.forEach(
                                (answer: string) => {
                                    answers.push({
                                        id: `nope-${this.decodeHtmlEntities(
                                            answer
                                        )}`,
                                        answer: this.decodeHtmlEntities(answer),
                                    })
                                }
                            )
                            const shuffledAnswers = answers.sort(
                                () => 0.5 - Math.random()
                            )
                            questionnary.push({
                                question: this.decodeHtmlEntities(
                                    questionItem.question
                                ),
                                answers: shuffledAnswers,
                            } as QuestionSet)
                        }
                    )

                    return questionnary
                })
            )
    }
}
