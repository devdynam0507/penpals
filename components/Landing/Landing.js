import styles from './css/Landing.module.css';
import Link from 'next/link'
import { handleSignout } from '../../server/asyncConnections/UserAsync';
import { useRouter } from 'next/router';

export default function Landing(props) {
	const userObjectSize = Object.keys(props.user).length;
	const router = useRouter();
	const onHandleSignout = () => router.reload();
	const handleSignoutWrapper = () => handleSignout(props.user, onHandleSignout);
	
    return (
        <>
			<p class={styles ['landing-info']}>
				일에 치이고, 사람에 치여 지친 당신을 위한 누군가의 메세지 <br/>
				나를 모르는 사람으로부터 위로받고싶을 때, 외로울 때, <br/>
				털어놓고싶은데 내 약점을 보이는거같아 주변사람들에게 털어놓긴 힘들 때, <br/>
				Untitled는 익명의 누군가와 대화할 수 있는 펜팔형 서비스입니다. <br/>
			</p>
			<p> { props.user.password } </p>
			<div class={styles ['landing-start-button-event-wrapper']}>
				<Link href='/signin'>
					<button class={styles ['landing-start-button-style']}>
						<a>시작하기</a>
					</button>
				</Link> <br/>
				{ userObjectSize > 0 ? 
					<Link href='/'>
						<a onClick={ handleSignoutWrapper }> 로그아웃</a>
					</Link>
					:
					null
				}
			</div>
        </>
    )
}