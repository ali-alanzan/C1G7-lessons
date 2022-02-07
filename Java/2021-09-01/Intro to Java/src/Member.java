import java.util.Scanner;

public class Member {
    public Member() {
        System.out.println("Your Name?");
        Scanner input = new Scanner(System.in);

        String memberName = input.next();

        System.out.println(memberName);
    }
}
