const tokens: string[] = ['ETH', 'MKR', 'ZRX', 'USDC', 'DAI', 'LINK'];

export default function TokenList() {
    return (
        <section className='carousel'>
            <div className='carousel-container'>
                <ul>
                    {tokens.map(token => <li key={token}>{token}</li>)}
                </ul>
            </div>
        </section>
    )
}