public class MySong {
    public String singer = "Shakira";

    public String song = "Waka Waka";

    double duration = 4.5;

    Integer year = 2020;

    boolean viral = true;

    public int getYear() {
        return this.year;
    }

    public void checkViralStatus() {

        if( this.viral == true ) { // START IF

            System.out.println(" Yes this song is on the trend ");

        } else {
            System.out.println("No, this song is not viral");
        }

    }


}
