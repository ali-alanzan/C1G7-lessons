import java.util.Scanner;

public class SolarSystem {
    public SolarSystem() {
// write your code here
        String question = "What is the largest planet in our solar system?";

        String choiceOne = "earth";
        String choiceTwo = "jupiter";
        String choiceThree = "saturn";

        final String correctAnswer = choiceTwo;

        System.out.println(question);

        System.out.println("Choose one of the following: " + choiceOne + ", " + choiceTwo + ", " + choiceThree);

        Scanner scanner = new Scanner(System.in);

        String input = scanner.next();

        System.out.println(correctAnswer);
        System.out.println(input);

        String convertedInput = input.toLowerCase();

        if ( correctAnswer.equals( convertedInput ) ) {
            System.out.println("Congrats! that's the correct answer");

        } else {
            System.out.println("You are incorrect. The correct answer is: " + correctAnswer);
        }

    }
}
