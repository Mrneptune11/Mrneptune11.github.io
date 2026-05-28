
//custom class used for text parsing
class Parser {

    //parses for color tags in text
    static colorHighlighter(text:string):Map<string,string> {
        const dict:Map<string,string> = new Map<string, string>();

        let textReader:string = "";
        let tagReader:string = "";
        
        let colorRecording:boolean = false;
        let textRecording:boolean = true;

        for (let i:number = 0; i < text.length; i++){
            const ch:string = text[i];
            //tag checkets
            if (ch === "[") {
                dict.set(textReader, tagReader);

                colorRecording = true;
                textRecording = false;
                textReader = "";
                tagReader = "";
                continue;
            }
            if (ch === "]") {
                colorRecording = false;
                textRecording = true
                continue;
            }
            //add tag when reading tag
            if (colorRecording) {
                tagReader += ch;
            }
            //add text when reading plain text
            if (textRecording)
                textReader += ch;
        }

        dict.set(textReader, tagReader); //adding the final text and tag
        return dict;
    }
}

export {Parser}