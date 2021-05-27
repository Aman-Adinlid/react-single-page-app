import React, { Component } from 'react';
import Table from "./Table";


class Main extends Component {
    state = {
        tables: [
            { category: "Sporting Goods", price: "$49.99", name: "Football", info: " sporting goods, are the tools, materials, apparel, and gear used to compete in a sport and varies depending on the sport. The equipment ranges from balls, nets, and protective gear like helmets. Sporting equipment can be used as protective gear or a tool used to help the athletes play the sport. Over time, sporting equipment has evolved because sports have started to require more protective gear to prevent injuries.[1] Sporting equipment may be found in any department store." },
            { category: "Game", price: "$9.99", name: "Basketball", info: "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one, two or three one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated." },
            { category: "Electronics", price: "$99.99", name: "iPod Touch", info: "The iPod is a portable music player developed by Apple Computer. Though it is an Apple product, the iPod can be used with both Macs and PCs. The iTunes software, also created by Apple, is used to organize and transfer songs and playlists to the iPod. Both iTunes and the iPod support a wide variety of audio formats, including MP3, AAC, WAV, and AIFF. MP3 is the most common audio compression format, while AAC is the format used by the iTunes Music Store. WAV and AIFF are nearly identical formats that store CD-quality audio." },
        ]
    };


    render() {
        const { tables } = this.state;
        return (
            <div>
                <br />
                <div>
                    <h1>React single page app</h1>
                    <br />
                    <Table tables={tables}
                    />
                    <div>
                    </div>

                </div>
                <br />
            </div>
        );
    }
}

export default Main;