export default async function Get({params}) {
    const SHIT = (await params).id;
    return (
        <div>
            gggg {SHIT}
        </div>
    )
}