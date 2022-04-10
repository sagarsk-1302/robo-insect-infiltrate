import './matrix-input.styles.css'

const MatrixInput = () =>{
    return (
        <div className="matrix">
            <input type="number" name="row" placeholder="row" className="matrix-input" />
            <input type="number" name="column" placeholder="column" className="matrix-input"/>
        </div>
    )
}

export default MatrixInput