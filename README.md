# Discord School Bot 
Discord bot for school's to create, admin and maintain a Discord server for school

## WIP

## Channel room setup
```
Disord server template [Guid Name]
├── Welcome in [schoole name]
├── Announcement
├── Teacher Room
│   ├── Reports
│   ├── Announcement
│   ├── Chat
│   └── Voise
├── Principal office
│   ├── Chat
│   ├── Voise
│   └── Log's
├── Detention
│   ├── Rules
│   └── Voise
├── Class Romm [name]
│   ├── Chat
│   └── Voise
└── 
```

## bot comands List

### Adnim comands
- **!help** - list of all comands
- **!init** - setap template

### Teacher comands
- **!help** - list of all 
- **!clear** - clear chat message
    + **/all** - clear all message
    + **/older** [start Date] {Date} - clear all massage older then UTM data format
- **!detention** [@username] - move to detention
- **!mute** [@username] - mute user and disallow sending message
   + **/all** - mute all
- **!unMute** [@username] - mute user and disallow sending message
   + **/all** - mute all
- **!kick** [@username] - move to detention
- **!createClass** [@name] - create class 
- **!addToClass** [@username] - add user to specific class with student role

### Comon comands
- **!help** - list of common comand
- **!about** - info about bot , [info, about]
- **!Server** - info about current guilt (server) [Server, ServerInfo]

