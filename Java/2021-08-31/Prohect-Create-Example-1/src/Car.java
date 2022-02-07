public class Car {
    public static void main(String[] args) {
        Car newCar = new Car();
        newCar.checkHardware();

        String firstName = "Ali";
    }

    private void checkHardware() {

        System.out.println("All checked");

    }

    public static void allHardware() {

        System.out.println("Hardware is fine");

    }


    public static void checkPrice(String name, int price) {

        if( price > 150 ) {
            System.out.println(name + " is Good");
        } else {
            System.out.println(name + " is Cheap");
        }

    }


}