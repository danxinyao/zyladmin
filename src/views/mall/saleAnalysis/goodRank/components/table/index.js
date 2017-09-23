import { mapGetters, mapActions } from 'vuex'

export default {
    props: {
        list: Array
    },
    computed: {
        ...mapGetters([
            'localLoading'
        ])
    },
    methods: {
       
    }
}