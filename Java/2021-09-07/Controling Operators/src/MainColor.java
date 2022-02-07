import java.util.Scanner;

public class MainColor {
    public MainColor () {
        Color colorHelper = new Color();
        colorHelper.getColor();

        // green
        System.out.println("choose one color: green, blue, black, white");
        Scanner userColor = new Scanner(System.in);
        String color = userColor.next();

        if( color.equals("green") ) {
            colorHelper.setColor("green");
        } else if( color.equals("blue") ) {
            colorHelper.setColor("blue");
        } else if( color.equals("black") ) {
            colorHelper.setColor("black");
        } else {
            System.out.println("not supported color");
        }

        colorHelper.getColor();
    }


}
