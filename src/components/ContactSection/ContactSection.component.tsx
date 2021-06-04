import { Icon, makeStyles, Theme } from '@material-ui/core'
import { Contact } from '.'

const useStyles = makeStyles(
  (theme: Theme) => {
    return {
      root: {
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.palette.secondary.main,
        margin: '0.5em auto 0',
        color: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
          flexDirection: 'row',
        },
      },

      /** Contact */
      contacts: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        [theme.breakpoints.up('sm')]: {
          width: '30%',
          alignItems: 'flex-start',
        },
      },
      contactItem: {
        fontSize: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '0.3em 0',
        color: theme.palette.primary.dark,
        textDecoration: 'none',
        transition: 'color 0.5s',
        '&:hover':{
          color: theme.palette.primary.main,
        },
        '& .MuiIcon-root': {
          fontSize: '2em',
          color: theme.palette.primary.main,
        },
        [theme.breakpoints.up('sm')]: {
          // fontSize: '1em',
        },
      },
      /** QR Code */
      qrCode: {
        [theme.breakpoints.up('sm')]: {
          backgroundImage: `url('/assets/qr-code.png')`,
          aspectRatio: '1/1',
          height: '6em',
          backgroundSize: 'contain',
        },
      },
    }
  },
  { name: 'ContactSection' }
)

const getClickAction = (contact: Contact) => {
  switch (contact.title) {
    case 'Email': {
      return `mailto:${contact.value}`
    }
    case 'Phone': {
      return `tel:${contact.value}`
    }
    default: {
      return `https://${contact.value}`
    }
  }
}
interface ContactSectionProps {
  contacts: Contact[]
}
const ContactSection = ({ contacts }: ContactSectionProps) => {
  const classes = useStyles()
  return (
    <div id='Contact' className={classes.root}>
      <div className={classes.contacts}>
        {contacts.map((contact, ind) => (
          <a target='_blank' href={getClickAction(contact)} key={ind} className={classes.contactItem}>
            <Icon>{contact.icon}</Icon>
            {`${contact.title}: ${contact.value}`}
          </a>
        ))}
      </div>
      <div className={classes.qrCode}></div>
    </div>
  )
}

export default ContactSection
