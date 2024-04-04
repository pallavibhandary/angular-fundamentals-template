export class Courses {
    public id: string;
    public title: string;
    public description: string;
    public creationDate: string;
    public duration: number;
    public authors: string[];


    constructor(id: string, title: string, description: string, creationDate: string, duration: number, authors: string[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.creationDate = creationDate;
        this.duration = duration;
        this.authors = authors;
    }

}