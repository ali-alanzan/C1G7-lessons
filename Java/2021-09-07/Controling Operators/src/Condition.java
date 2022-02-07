import java.util.Scanner;

public class Condition {
    public Condition() {
        System.out.println("Pick a number between 1 and 10");
        Scanner input = new Scanner(System.in);

        int inputtedNum = input.nextInt();

        // Logic that helps me to the decision-making process
        if ( inputtedNum < 5 ) {
            System.out.println("Great, your gift in the way for you");
        } else {
            System.out.println("Oh, Sorry, Good Luck Next Time");
        }


    }
}
