
function music() {
    const musicArr = ["./music/piano.mp3", "./music/saxophone.mp3", "./music/drum.mp3", "./music/cello.mp3"];
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
    })
    $("#saxophone").click(function () {
        saxophone.play();
    })
    $("#drum").click(function () {
        drum.play();
    })
    $("#cello").click(function () {
        cello.play();
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
