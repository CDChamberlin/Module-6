function City({name, state =  'NSW', country = 'Australia', children}){
    return (
        <div>
            <strong>{name}</strong> is in {state}, {country}
        {children}
        </div>
    )
}
export default City