export default class ProjectInfoModel
{
    backgroundImageSource: string = "";
    header: string = ""
    description: string = "";
    btnText: string = "";
    btnHref: string = "";
    btnRouterLink: string = "";

    constructor(
        backgroundImageSource: string = "", 
        header: string = "", 
        description: string = "", 
        btnText: string = "",
        btnHref: string = "",
        btnRouterLink: string = "")
    {
        this.backgroundImageSource = backgroundImageSource;
        this.header = header;
        this.description = description;
        this.btnText = btnText;
        this.btnHref = btnHref;
        this.btnRouterLink = btnRouterLink;
    }
}