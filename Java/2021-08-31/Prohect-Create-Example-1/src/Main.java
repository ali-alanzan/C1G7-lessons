public class Main {

    public static void main(String[] args) {
        System.out.println("Hello From main method");
        HelloWorld hello = new HelloWorld();
        hello.test();

        Car.allHardware();

        Car.checkPrice("Audi", 100);

        String firstName  = "Ali";
        String lastName  = "Alanzan";
        Integer age  = 24;

        System.out.println( "I'm " + firstName + " " + lastName + " I'm " + age + " years old" );
    }



}
