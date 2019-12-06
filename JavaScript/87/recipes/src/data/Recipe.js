export default class Recipe {
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.ingredients = props.ingredients;
        this.directions = props.directions;
        this.picture = props.picture;

        Object.freeze(this);
    }
}