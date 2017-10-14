export class Types {
    private types = {}

    public mapType = (type: string) => {
        type = type.split('[]')[0]
        if (type === 'string') {
            return
        }
        const isArray = type.split('[]')
        const isBool = type.startsWith('bool')

        const strFactory = isBool ? 'boolean' : 'string'
        if (!this.types[type]) {
                this.types[type] = strFactory
        }
    }

    public getTypes = () => this.types
}
