import { useEffect } from 'react';
import './style.css'
import { Loader } from 'lucide-react';


interface Props {
    variant: 'primary' | 'secondary'
    onClick: () => void;
    loading?: boolean;
    lable?: string
}
const CommonBtn = ({ variant, onClick, loading, lable }: Props) => {    

    return <button onClick={onClick} className={`btn btn-${variant}`}>

        {
            loading && <Loader className='spin' />
        }
        <span>
            {loading ? 'loading...' : lable}
        </span>
    </button >
}

export default CommonBtn;