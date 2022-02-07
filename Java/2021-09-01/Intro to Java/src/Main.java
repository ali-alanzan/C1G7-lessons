import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Your Name?");
        String memberName = input.next();

        System.out.println("Your Age?");
        Integer age  = input.nextInt();
        Integer ageInDays = age * 365;


        System.out.println("Your Salary?");
        double salary  = input.nextDouble();

        System.out.println("Hello " + memberName + " And your age in days equals " + ageInDays );


    }
}
