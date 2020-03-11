export class SAMPLES{
    srjno = null;
    gactnumber = null;
    gaanalysis = null;
    gadate = null;
    gatime = null;
    gaspecimens = null ;
    mrirefnum = null;
    mrianalysis = null;
    mridate = null;
    mritime = null;
    mrispecimens = null;
    otherrefnum = null;
    otheranalysis = null;
    otherdate = null;
    othertime = null;
    otherspecimens = null;
    constructor(srjno, 
        gactnumber,
        gaanalysis,
        gadate ,
        gatime ,
        gaspecimens,
        mrirefnum,
        mrianalysis,
        mridate,
        mritime,
        mrispecimens,
        otherrefnum,
        otheranalysis,
        otherdate,
        othertime,
        otherspecimens ) {
            this.srjno = srjno;
            this.gactnumber = gactnumber;
            this.gaanalysis = gaanalysis;
            this.gadate = gadate;
            this.gatime = gatime;
            this.gaspecimens = gaspecimens;
            this.mrirefnum = mrirefnum;
            this.mrianalysis = mrianalysis;
            this.mridate = mridate;
            this.mritime = mritime;
            this.mrispecimens = mrispecimens;
            this.otherrefnum = otherrefnum;
            this.otheranalysis = otheranalysis;
            this.otherdate = otherdate;
            this.othertime = othertime;
            this.otherspecimens = otherspecimens;
        }
    
}