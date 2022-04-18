import React from 'react'
import TextHeader from '../components/TextHeader.jsx'

const Privacy = () => {
  return (
  <div className="flex flex-col space-y-4">
    <TextHeader text="Overview"/>
    <p>The following are the goals of the Squire Tournament Services (STS):</p>
    <ul className="list-disc spac-y-4">
      <li>To provide platforms for running customizable tournaments</li>
      <li>To enable everyone in the MtG community to host tournaments</li>
      <li>To aggregate tournament data and provide it back to the whole community free of charge</li>
      <li>To remain free-to-use and open source</li>
    </ul>
    <p>STS nor Monarch Events will sell data collected using the STS platforms</p>

    <TextHeader text="For the Public"/>
    <p>
All data from tournaments, except that withheld by individual players, will be made available 
to the public after (or perhaps during) a tournament. This includes all match results and 
tournament structures. Unless otherwise withheld by individuals, names and deck lists will also 
be made public.
    </p>

    <TextHeader text="For Players"/>
    <p>
Players can withhold personally identifying information from the public release of tournament data. 
This includes their name and decklist(s). During a tournament, this data will not be redacted. Any 
person associated with the tournament will be able to see such data (decklist notwithstanding). After
the tournament has concluded, every person associated with the tournament except the owner of the 
tournament, TOs, and judges will have the public view of the tournament data. The aforementioned parties 
will be able to post unredacted versions of this data if they wish but will be notified if a player 
wishes to remain anonymous.
    </p>

    <TextHeader text="For Officials"/>
    <p>
The tournament owner, TOs, and judges will have access to unredacted tournament data both during and after a tournament. They can publish any subset of the unredacted data from a tournament where they see fit, but they will not be able to prevent the public release of redacted tournament data.
    </p>
  </div>
  );
};

export default Privacy;
