import { Injectable } from "@angular/core"
import { Theme } from "../models/Theme"

@Injectable({
    providedIn: "root",
})
export class ThemeDataService {
    quizThemes: Theme[] = [
        {
            name: "General Knowledge",
            id: 9,
            logo: "../../assets/themes/knowledge.png",
        },
        {
            name: "Science & Nature",
            id: 17,
            logo: "../../assets/themes/science.avif",
        },
        {
            name: "Sports",
            id: 21,
            logo: "../../assets/themes/sports.avif",
        },
        {
            name: "History",
            id: 23,
            logo: "../../assets/themes/history.jpg",
        },
        {
            name: "Art",
            id: 25,
            logo: "../../assets/themes/art.jpg",
        },
        {
            name: "Animals",
            id: 27,
            logo: "../../assets/themes/animals.jpg",
        },
        {
            name: "Films",
            id: 11,
            logo: "../../assets/themes/films.jpg",
        },
        {
            name: "Music",
            id: 12,
            logo: "../../assets/themes/music.jpg",
        },
        {
            name: "Video Games",
            id: 15,
            logo: "../../assets/themes/games.jpg",
        },
    ]
}
