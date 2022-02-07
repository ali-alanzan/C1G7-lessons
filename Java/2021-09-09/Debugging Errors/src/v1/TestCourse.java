package v1;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class TestCourse {
    @Test
    public void successfulIsEmptyTest() {
        assertNull( Course.isEmpty(null) );
        assertNull( Course.isEmpty("") );
        assertNotNull( Course.isEmpty("test") );
        assertNotNull( Course.isEmpty(" ") );

    }



    @Test
    public void successfulIsNotEmptyTest() {
        assertNotNull( Course.isNotEmpty(" ") );

    }

}