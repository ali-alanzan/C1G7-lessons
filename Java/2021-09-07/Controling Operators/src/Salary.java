public class Salary {

    int netSalary;
    int salary;
    int minSalary = 50;
    int maxSalary = 150;

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }


    public int getNetSalary() {
        return netSalary;
    }

    public void setNetSalary(int netSalary) {
        this.netSalary = netSalary;
    }

    /**
     *
     * Controlling Operators:
     *  < : is less than
     *  > : is greater than
     *  >= : is greater than or equals
     *  <= : is less than or equals
     *  == : is equal to
     *  != : NOT equals
     *
     */



    // Constructor
    public Salary(int numberOfSalary) {
        this.setSalary(numberOfSalary);

        if( numberOfSalary < this.minSalary  ) {

            this.setNetSalary( this.minSalary );

        } else if( numberOfSalary <= this.minSalary ) {
            this.setNetSalary( this.minSalary + 10 );
            System.out.println("You Got 10 bonus ");

        } else if( numberOfSalary >= this.maxSalary ) { // this condition wil run instead of the next 2 conditions

            System.out.println(" your salary may be greater than or equals to the max salary");
            this.setNetSalary( this.maxSalary );

        } else if ( numberOfSalary > this.maxSalary ) {
            this.setNetSalary( this.maxSalary );
        } else if ( numberOfSalary == this.maxSalary ) {
            System.out.println("this salary equals to the max salary in our system ");
            this.setNetSalary( numberOfSalary );
        } else {
            System.out.println("no case for this salary");
        }

    }


}
