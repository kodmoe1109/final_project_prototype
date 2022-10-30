
function music() {
    const musicArr = ["./music/piano.wav", "./music/saxophone.wav", "./music/drum.wav", "./music/bass.wav"];
    let _rate = 1;
    let _volume = 0.5;

    let piano = new Howl({
        // 參數設定[註1]
        src: musicArr[0],
        autoplay: false,
        loop: false, 
        volume: _volume, 
        rate: _rate,
    });
    let saxophone = new Howl({
        // 參數設定[註1]
        src: musicArr[1],
        autoplay: false, 
        loop: false, 
        volume: _volume, 
        rate: _rate,
    });
    let drum = new Howl({
        // 參數設定[註1]
        src: musicArr[2],
        autoplay: false, 
        loop: false, 
        volume: _volume,
        rate: _rate,
    });
    let cello = new Howl({
        src: musicArr[3],
        autoplay: false,
        loop: false, 
        volume: _volume,
        rate: _rate,
    });

    $("#piano").click(function () {
        piano.play();
        $('#piano_img').show()
    })
    $("#saxophone").click(function () {
        saxophone.play();
        $('#saxophone_img').show()
    })
    $("#drum").click(function () {
        drum.play();
        $('#drum_img').show()
    })
    $("#cello").click(function () {
        cello.play();
        $('#cello_img').show()
    })
    $('#Range1').change(function () {
        piano.volume($('#Range1').val())
    })
    $('#Range2').change(function () {
        saxophone.volume($('#Range2').val())
    })
    $('#Range3').change(function () {
        drum.volume($('#Range3').val())
    })
    $('#Range4').change(function () {
        cello.volume($('#Range4').val())
    })
    $('#speed1').change(function () {
        piano.rate($('#speed1').val())
    })
    $('#speed2').change(function () {
        saxophone.rate($('#speed2').val())
    })
    $('#speed3').change(function () {
        drum.rate($('#speed3').val())
    })
    $('#speed4').change(function () {
        cello.rate($('#speed4').val())
    })
}
