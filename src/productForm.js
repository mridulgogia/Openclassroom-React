import React ,{Component} from 'react';

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

export default class ProductForm extends Component{
  constructor(props){
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      product: Object.assign({}, RESET_VALUES),
      error: {}
    };
  } 

  handleSave(event){
    this.props.onSave(this.state.products);
    this.setState({
      product: Object.assign({}, RESET_VALUES)
    });
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target[target.type === 'checkbox' ? 'checked' : 'value'];
    const name = target.name;

    this.setState( (prevState) => {
      prevState.product[name] = value;
      return {product: prevState.product}
    });
  }
    render() {
        return (
            <div>
                <form>
                     <h3>Enter a new product</h3>
                         <p>
                            <label>
                                 Name
                                 <br />
                                 <input type="text" name="name" onChange={this.handleChange} value= {this.state.product.name} />
                                </label>
                          </p>
                          <p>
                             <label>
                               Category
                                <br />
                               <input type="text" name="category" value={this.state.product.category} onChange={this.handleChange}/>
                             </label>
                            </p>
                            <p>
                              <label>
                                Price
                                <br />
                                <input type="text" name="price" value={this.state.product.price} onChange={this.handleChange}/>
                              </label>
                            </p>
                              <p>
                                <label>
                                  <input type="checkbox" name="stocked" onChange={this.handleChange} checked={this.state.product.stocked} />
                                  &nbsp;In stock?
                                </label>
                              </p>
                              <input type="submit"
                              value="Save"
                              onClick = {this.handleSave} />
                </form>
            </div>
        )
    }
}