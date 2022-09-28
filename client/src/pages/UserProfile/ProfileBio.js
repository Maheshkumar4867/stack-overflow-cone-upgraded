import React from 'react'
import { useSelector } from 'react-redux'
import Location from './Location'
import { useParams } from 'react-router-dom'

const ProfileBio = ({ currentProfile }) => {

    const { id } = useParams();

    const currentUser = useSelector((state) => state.currentUserReducer)

  return (
    <div>
            <div>
                {
                    currentUser?.result._id === id?
                    <Location currentProfile={currentProfile}/>
                    :
                    ""
                }
                {
                    currentProfile?.tags.length !== 0 ? (
                        <>
                            {/* <Location/> */}
                            <h4>Tags watched</h4>
                            {
                                currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </>
                    ) : (
                        <p>0 tags watched</p>
                    )
                }
            </div>
            <div>
                {
                    currentProfile?.about ? (
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.about}</p>
                        </>
                    ) : (
                        <p>No bio found</p>
                    )
                }
            </div>
        </div>

  )
}

export default ProfileBio