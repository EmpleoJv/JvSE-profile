import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    message: string = 'FULL-STACK DEVELOPER     ';
    message2: string = 'FREELANCER     ';

    constructor() {}

    ngOnInit(): void {
        this.typewriterEffect();
    }

    typewriterEffect(): void {
        const element = document.getElementById('myElement');
        if (element) {
            const text = this.message;
            let i = 0;
            element.innerHTML = "I'M A "; // Clear existing content
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    setTimeout(() => {
                        // Reset the typewriter effect after a delay (e.g., 3 seconds)
                        this.typewriterEffect2();
                    }, 100); // Adjust the delay as needed
                }
            }, 120); // Adjust the interval to change typing speed
        }
    }
    typewriterEffect2(): void {
        const element = document.getElementById('myElement');
        if (element) {
            const text = this.message2;
            let i = 0;
            element.innerHTML = "I'M A "; // Clear existing content
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    setTimeout(() => {
                        // Reset the typewriter effect after a delay (e.g., 3 seconds)
                        this.typewriterEffect();
                    }, 100); // Adjust the delay as needed
                }
            }, 120); // Adjust the interval to change typing speed
        }
    }
}
