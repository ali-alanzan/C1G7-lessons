package v1;

public class Course {
    public static String isEmpty(String word) {
        if(  word == null  || word.length() == 0 ) {
            return null;
        } else {
            return word;
        }
    }


    public static String isNotEmpty(String word) {
        if( word != null  && word.length() > 0  ) {
            return word;
        } else {
            return null;
        }
    }

}
