import  java.util.Scanner;

/**
 * if ( condition ) {
 *      // code to execute if the condition is true
 * }
 *
 *  != : NOT equals
 */
public class MainSalary {
    public MainSalary(String[] args) {

        Salary ahmedSalary = new Salary(250);

        System.out.println( ahmedSalary.getNetSalary() );

        if ( ahmedSalary.getSalary() != ahmedSalary.getNetSalary() ) {
            System.out.println("Your Stored Salary is " + ahmedSalary.getSalary() + " and your salary will be " + ahmedSalary.getNetSalary());
        }

    }
}



