input.onButtonEvent(Button.A, ButtonEvent.Click, function () {
	game.gameOver()
})

function löscheZeichen(Zeile: number, Spalte: number) {
    oledssd1306.setTextXY(Zeile, Spalte)
    oledssd1306.clearRange(1)
}
game.setLife(3)
oledssd1306.initDisplay()
let HerzSpalte = 0
let HerzSpalte2 = 0
let Spalteneu = 5
let SpalteNeu2 = 4
let SpalteAlt = 5
let SpalteAlt2 = 4
let Wartezeit = 400
oledssd1306.setTextXY(2, 0)
oledssd1306.writeString("Herzfänger V1.0")
oledssd1306.setTextXY(4, 0)
oledssd1306.writeString("Spaß mit OLED &")
oledssd1306.setTextXY(6, 1)
oledssd1306.writeString("Calliope Mini")
basic.pause(2000)
oledssd1306.clearDisplay()
oledssd1306.CalliopeMini(1, 6)
oledssd1306.setTextXY(8, 0)
oledssd1306.writeString("Limo Game Engine")
basic.pause(2000)
oledssd1306.clearDisplay()
oledssd1306.Herzfaengerleer(7, Spalteneu)
oledssd1306.Herzfaengerleer(7, SpalteNeu2)
basic.pause(600)
basic.forever(function () {
    SpalteAlt = Spalteneu
    SpalteAlt2 = SpalteNeu2
    Spalteneu = HerzSpalte
    SpalteNeu2 = HerzSpalte2
    löscheZeichen(7, SpalteAlt)
löscheZeichen(7, SpalteAlt2)
oledssd1306.Herzfaengerleer(7, Spalteneu)
    oledssd1306.Herzfaengerleer(7, SpalteNeu2)
})
basic.forever(function () {
    HerzSpalte = randint(0, 10)
    for (let HerzZeile = 0; HerzZeile <= 7; HerzZeile++) {
        if (HerzZeile == 7) {
            if (HerzSpalte == Spalteneu) {
                oledssd1306.Herzfaengervoll(HerzZeile, HerzSpalte)
                löscheZeichen(HerzZeile - 1, HerzSpalte)
game.addScore(1)
            } else {
                löscheZeichen(HerzZeile - 1, HerzSpalte)
oledssd1306.Herz(HerzZeile, HerzSpalte)
                game.removeLife(1)
            }
        } else {
            oledssd1306.Herzgefuellt(HerzZeile, HerzSpalte)
            if (HerzZeile != 0) {
                löscheZeichen(HerzZeile - 1, HerzSpalte)
            }
            basic.pause(Wartezeit)
        }
    }
    Wartezeit += -5
})
basic.forever(function () {
    HerzSpalte2 = randint(0, 10)
    for (let HerzZeile2 = 0; HerzZeile2 <= 7; HerzZeile2++) {
        if (HerzZeile2 == 7) {
            if (HerzSpalte2 == SpalteNeu2) {
                oledssd1306.Herzfaengervoll(HerzZeile2, HerzSpalte2)
                löscheZeichen(HerzZeile2 - 1, HerzSpalte2)
game.addScore(1)
            } else {
                löscheZeichen(HerzZeile2 - 1, HerzSpalte2)
oledssd1306.Herz(HerzZeile2, HerzSpalte2)
                game.removeLife(1)
            }
        } else {
            oledssd1306.Herzgefuellt(HerzZeile2, HerzSpalte2)
            if (HerzZeile2 != 0) {
                löscheZeichen(HerzZeile2 - 1, HerzSpalte2)
            }
            basic.pause(Wartezeit)
        }
    }
    Wartezeit += -5
})
