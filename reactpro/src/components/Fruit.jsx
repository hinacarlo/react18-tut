export default function Fruit({ name, price, emoji }) {
    return <li key={name}>{name} {emoji} ${price}</li>;
}
