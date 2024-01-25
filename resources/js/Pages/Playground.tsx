import WrapPlay from "@/Components/WrapPlay";


const Playground = () => {
    return ( 

            <WrapPlay
                title="Cuptivating Design Services"
                content="A good design is the first impression you would make on your customers."
                image={<img src="https://picsum.photos/500/300" alt="Services" />}
                list={[
                    { text: 'web design', link: '#' },
                    { text: 'mobile app design', link: '#' },
                    { text: 'UI/UX design', link: '#' },
                ]}
                isPotrait={true}
            />
     );
}
 
export default Playground;