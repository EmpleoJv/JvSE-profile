import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    message: string = 'Im Jayvee Empleo';
    message2: string = 'Im Armie Empleo';

    constructor() {}

    ngOnInit(): void {
        this.typewriterEffect();
    }

    typewriterEffect(): void {
        const element = document.getElementById('myElement');
        if (element) {
            const text = this.message;
            let i = 0;
            element.innerHTML = 'Hello '; // Clear existing content
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
            }, 100); // Adjust the interval to change typing speed
        }
    }
    typewriterEffect2(): void {
        const element = document.getElementById('myElement');
        if (element) {
            const text = this.message2;
            let i = 0;
            element.innerHTML = 'Hello '; // Clear existing content
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
            }, 100); // Adjust the interval to change typing speed
        }
    }
}
