import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class Main {

    public static void main(String[] args) {

        new SolarSystem();

    }

    @Test
    public void testEquals() {
        String choiceOne = "earth";
        String choiceTwo = "jupiter";
        String choiceThree = "saturn";

        final String correctAnswer = choiceTwo;

        assertEquals(correctAnswer, choiceTwo);

    }


}
