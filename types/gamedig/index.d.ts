// Type definitions for Gamedig 1.0
// Project: https://github.com/sonicsnes/node-gamedig
// Definitions by: Ivan Sieder <https://github.com/ivansieder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type Type =
    | "7d2d"
    | "ageofchivalry"
    | "aoe2"
    | "alienarena"
    | "alienswarm"
    | "arkse"
    | "avp2"
    | "avp2010"
    | "americasarmy"
    | "americasarmy2"
    | "americasarmy3"
    | "americasarmypg"
    | "arma"
    | "arma2"
    | "arma3"
    | "armagetron"
    | "baldursgate"
    | "bat1944"
    | "bf1942"
    | "bfv"
    | "bf2"
    | "bf2142"
    | "bfbc2"
    | "bf3"
    | "bf4"
    | "bfh"
    | "breach"
    | "breed"
    | "brink"
    | "buildandshoot"
    | "cod"
    | "coduo"
    | "cod2"
    | "cod3"
    | "cod4"
    | "codwaw"
    | "codmw2"
    | "codmw3"
    | "callofjuarez"
    | "chaser"
    | "chrome"
    | "codenameeagle"
    | "commandos3"
    | "cacrenegade"
    | "conanexiles"
    | "contactjack"
    | "cs16"
    | "cscz"
    | "css"
    | "csgo"
    | "crossracing"
    | "crysis"
    | "crysiswars"
    | "crysis2"
    | "daikatana"
    | "dmomam"
    | "darkesthour"
    | "dayz"
    | "dayzmod"
    | "deadlydozenpt"
    | "dh2005"
    | "descent3"
    | "deusex"
    | "devastation"
    | "dinodday"
    | "dirttrackracing2"
    | "dnl"
    | "dod"
    | "dods"
    | "doi"
    | "doom3"
    | "dota2"
    | "drakan"
    | "etqw"
    | "fear"
    | "f12002"
    | "f1c9902"
    | "farcry"
    | "farcry2"
    | "fortressforever"
    | "flashpoint"
    | "ffow"
    | "fivem"
    | "garrysmod"
    | "graw"
    | "graw2"
    | "giantscitizenkabuto"
    | "globaloperations"
    | "geneshift"
    | "ges"
    | "gore"
    | "gunmanchronicles"
    | "hldm"
    | "hl2dm"
    | "halo"
    | "halo2"
    | "heretic2"
    | "hexen2"
    | "hidden"
    | "had2"
    | "homefront"
    | "homeworld2"
    | "hurtworld"
    | "igi2"
    | "il2"
    | "insurgency"
    | "ironstorm"
    | "jamesbondnightfire"
    | "jc2mp"
    | "killingfloor"
    | "killingfloor2"
    | "kingpin"
    | "kisspc"
    | "kspdmp"
    | "kzmod"
    | "left4dead"
    | "left4dead2"
    | "m2mp"
    | "medievalengineers"
    | "mohaa"
    | "mohpa"
    | "mohab"
    | "mohsh"
    | "mohbt"
    | "moh2010"
    | "mohwf"
    | "minecraft"
    | "minecraftpe"
    | "minecraftping"
    | "mnc"
    | "mtavc"
    | "mtasa"
    | "mumble"
    | "mumbleping"
    | "mutantfactions"
    | "nascarthunder2004"
    | "netpanzer"
    | "nmrih"
    | "ns"
    | "ns2"
    | "nfshp2"
    | "nab"
    | "nwn"
    | "nwn2"
    | "nexuiz"
    | "nitrofamily"
    | "nolf"
    | "nolf2"
    | "nucleardawn"
    | "openarena"
    | "openttd"
    | "operationflashpoint"
    | "painkiller"
    | "postal2"
    | "prey"
    | "primalcarnage"
    | "quake1"
    | "quake2"
    | "quake3"
    | "quake4"
    | "ragdollkungfu"
    | "r6"
    | "r6roguespear"
    | "r6ravenshield"
    | "rallisportchallenge"
    | "rallymasters"
    | "redorchestra"
    | "redorchestraost"
    | "redorchestra2"
    | "redline"
    | "rtcw"
    | "ricochet"
    | "riseofnations"
    | "rune"
    | "rust"
    | "samp"
    | "spaceengineers"
    | "ss"
    | "ss2"
    | "shatteredhorizon"
    | "ship"
    | "shogo"
    | "shootmania"
    | "sin"
    | "sinep"
    | "soldat"
    | "sof"
    | "sof2"
    | "stalker"
    | "stbc"
    | "stvef"
    | "stvef2"
    | "swbf"
    | "swbf2"
    | "swjk"
    | "swjk2"
    | "swrc"
    | "starbound"
    | "starmade"
    | "suicidesurvival"
    | "swat4"
    | "svencoop"
    | "synergy"
    | "tacticalops"
    | "teamfactor"
    | "tfc"
    | "tf2"
    | "teamspeak2"
    | "teamspeak3"
    | "terminus"
    | "terraria"
    | "thps3"
    | "thps4"
    | "thu2"
    | "towerunite"
    | "trackmania2"
    | "trackmaniaforever"
    | "tremulous"
    | "tribes1"
    | "tribesvengeance"
    | "tron20"
    | "turok2"
    | "universalcombat"
    | "unreal"
    | "unturned"
    | "ut"
    | "ut2003"
    | "ut2004"
    | "ut3"
    | "urbanterror"
    | "v8supercar"
    | "ventrilo"
    | "vietcong"
    | "vietcong2"
    | "warsow"
    | "wheeloftime"
    | "wolfenstein2009"
    | "wolfensteinet"
    | "xpandrally"
    | "zombiemaster"
    | "zps";

export interface Player {
    name?: string;
    ping?: number;
    score?: number;
    team?: string;
    address?: string;
}

export interface QueryOptions {
    type: Type;
    host: string;
    port?: number;
    notes?: object;
    maxAttempts?: number;
    socketTimeout?: number;
    attemptTimeout?: number;
}

export interface QueryResult {
    name: string;
    map: string;
    password: boolean;
    maxplayers: number;
    players: Player[];
    bots: Player[];
    notes: object;
    raw?: object;
    query?: object;
}

export function query(
    options: QueryOptions,
    callback: (error: any, state: QueryResult) => void
): void;

export function query(options: QueryOptions): Promise<QueryResult>;
