public class Rectangle {
    public int height;
    public int width;

    public Rectangle(int height, int width) {
        this.height = height;
        this.width = width;
    }

    public boolean isLine() {
        if( this.height <= 0 && this.width > 0 ) {
            return true;
        }
        return false;
    }

    public boolean isRectangle() {

        if( this.height < this.width ) {
            return true;
        }



        return false;
    }

}
