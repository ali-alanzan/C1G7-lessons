import java.util.Scanner;

public class WhileLoop {
    int i = 0;

    public WhileLoop() {
//        while( i <= 10 ) {
//            System.out.println(i);
//            i++;
//        }

//        System.out.println(i + " After the while");



        Scanner input = new Scanner(System.in);

        boolean isOnRepeat = true;

        while ( isOnRepeat ) {
            System.out.println("Playing current song");
            System.out.println("Would you like to take song off of repeat? If so, answer yes");
            String userInput = input.next();

            if( userInput.equals("yes") ) {
                isOnRepeat = false;
            }
        }
        System.out.println("Playing next song");

    }
}
