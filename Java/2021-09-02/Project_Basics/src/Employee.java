public class Employee {
    public int salaryPerHour;

    public int hours;

    public Employee(int salaryPerHour, int hours) {
        this.salaryPerHour = salaryPerHour;
        this.hours = hours;
    }

    public void calcSalary() {

        System.out.println(
                "the result of " + this.salaryPerHour + " * " + this.hours +
                        " equals " + this.salaryPerHour * this.hours
        );

    }

    public void checkEmployee( String employeeType ) {
        Integer bonus = 0;

        if( employeeType == "Manager" ) {
            bonus = 10;
            this.salaryPerHour =  this.salaryPerHour + bonus;
        }

        if( employeeType == "supervisor" ) {
            bonus = 5;
            this.salaryPerHour =  this.salaryPerHour + bonus;
        }


        if( bonus > 0 ) {
            String message = "this employee is a " + employeeType + " and had "+bonus +
                    "$ bonus for every hour, and he works for " + this.hours + "hours";
            System.out.println(message);
        }

    }


}
