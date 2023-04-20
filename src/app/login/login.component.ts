import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { FormGroup, FormBuilder } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    constructor(private formBuilder: FormBuilder, private router: Router) {}

    @Output() modalClosed = new EventEmitter<boolean>()
    loginForm!: FormGroup
    hide: boolean = true
    isUserSigning: boolean = false

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: [null],
            password: [null],
        })
    }

    onLogSignOption(event: any): void {
        if (event.target.id === "login") {
            this.isUserSigning = false
        } else {
            this.isUserSigning = true
        }
    }

    onCloseModal():void {
        this.modalClosed.emit(true)
    }
}
