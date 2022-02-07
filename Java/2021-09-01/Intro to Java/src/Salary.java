public class Salary {
    public Integer salary = 0;
    public static Integer tax = 10;
    public static Integer totalSalary = 0;


    public Salary(Integer salary) {

//     code to execution when the function fired up
//        code ....
        this.salary = salary;
        this.totalSalary = this.salary - ( (this.salary / 100 ) * this.tax );

    }

    public int getTotalSalary() {
        return this.totalSalary;
    }

    public void getSalaryPerDay() {
        System.out.println( this.salary / 20 );
        System.out.println("Hello");
    }


}
