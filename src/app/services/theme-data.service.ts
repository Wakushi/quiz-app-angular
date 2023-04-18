import { Injectable } from "@angular/core"
import { Theme } from "../models/Theme"

@Injectable({
    providedIn: "root",
})
export class ThemeDataService {
    quizThemes: Theme[] = [
        {
            name: "General",
            id: 9,
            logo: "../../assets/themes/general.png",
        },
        {
            name: "Science & Nature",
            id: 17,
            logo: "../../assets/themes/chemistry.png",
        },
        {
            name: "Sports",
            id: 21,
            logo: "../../assets/themes/sports.png",
        },
        {
            name: "History",
            id: 23,
            logo: "../../assets/themes/history.png",
        },
        {
            name: "Art",
            id: 25,
            logo: "../../assets/themes/palette.png",
        },
        {
            name: "Animals",
            id: 27,
            logo: "../../assets/themes/animals.png",
        },
        {
            name: "Films",
            id: 11,
            logo: "../../assets/themes/camera.png",
        },
        {
            name: "Music",
            id: 12,
            logo: "../../assets/themes/music.png",
        },
        {
            name: "Video Games",
            id: 15,
            logo: "../../assets/themes/game.png",
        },
    ]
}
