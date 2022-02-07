import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

/*
* assertFalse(value)
*   check if the value is false
*
* assertTrue(value)
*    check if the value is true
*
* assertNotEquals(firstValue, secondValue)
*   check if the first value not equals to the second value
*
* assertEquals(firstValue, secondValue)
*   check if the first value equals to the second value
* */

public class TestRectangle {
    @Test
    public void testRectangleLine() {
        Rectangle rect1 = new Rectangle(10, 10);
//        System.out.println( rect1.isLine() );
        assertFalse( rect1.isLine() );

    }

    @Test
    public void testIsRectangle() {
        Rectangle rect1 = new Rectangle(8, 10);
        assertTrue( rect1.isRectangle() );

    }

    @Test
    public void testSquareIsRectangle() {
        Rectangle rect1 = new Rectangle(10, 10);
        assertFalse( rect1.isRectangle() );

    }


    @Test
    public void testIsNotSquare() {
        Rectangle rect1 = new Rectangle(8, 10);
        assertNotEquals( rect1.height, rect1.width );

    }

}
