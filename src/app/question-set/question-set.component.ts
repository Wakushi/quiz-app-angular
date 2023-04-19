import {
    Component,
    Input,
    ElementRef,
    QueryList,
    ViewChildren,
    Renderer2,
} from "@angular/core"
import { QuestionSet } from "../models/QuestionSet"

@Component({
    selector: "app-question-set",
    templateUrl: "./question-set.component.html",
    styleUrls: ["./question-set.component.scss"],
})
export class QuestionSetComponent {
    @Input() questionSet!: QuestionSet
    @ViewChildren("answerEl", { read: ElementRef })
    answerElements!: QueryList<ElementRef>
    constructor(private renderer: Renderer2) {}

    public selectedAnswerId!: string
    answerPoint: number = 1

    onSelectAnswer(answerId: string): void {
        this.selectedAnswerId = answerId
    }

    applyResultStyles(): void {
        if (this.selectedAnswerId !== undefined) {
            this.answerElements.forEach((answerElement) => {
                const id = answerElement.nativeElement.id
                const element = answerElement.nativeElement

                if (id.slice(0, 4) === "good") {
                    this.renderer.addClass(element, "good")
                } else if (
                    id.slice(0, 4) === "nope" &&
                    this.selectedAnswerId === id
                ) {
                    this.renderer.addClass(element, "bad")
                    this.answerPoint--
                } else if (id.slice(0, 4) === "nope") {
                    this.renderer.addClass(element, "grayed")
                    this.renderer.addClass(element, "unselectable")
                }
            })
        }
    }
}
