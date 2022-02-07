public class Main {


    public static void main(String[] args) {
	// write your code here
       MySong song = new MySong();

        System.out.println( song.getYear()  );

        song.checkViralStatus();


        Employee first_employee = new Employee(120, 30);
        first_employee.checkEmployee("worker");
        first_employee.calcSalary();

        Employee secondEmployee = new Employee(100, 40);
        secondEmployee.checkEmployee("Manager");
        secondEmployee.calcSalary();



    }
}
