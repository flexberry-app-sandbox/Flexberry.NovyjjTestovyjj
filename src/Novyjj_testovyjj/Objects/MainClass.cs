﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Novyjj_testovyjj
{
    using ICSSoft.STORMNET;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Main class.
    /// </summary>
    // *** Start programmer edit section *** (MainClass CustomAttributes)

    // *** End programmer edit section *** (MainClass CustomAttributes)
    [AutoAltered()]
    [Caption("Main class")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("MainClassE", new string[] {
            "ID as \'ID\'"})]
    [View("MainClassL", new string[] {
            "ID as \'ID\'"})]
    public class MainClass : ICSSoft.STORMNET.DataObject
    {

        private int fID;

        // *** Start programmer edit section *** (MainClass CustomMembers)

        // *** End programmer edit section *** (MainClass CustomMembers)


        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (MainClass.ID CustomAttributes)

        // *** End programmer edit section *** (MainClass.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (MainClass.ID Get start)

                // *** End programmer edit section *** (MainClass.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (MainClass.ID Get end)

                // *** End programmer edit section *** (MainClass.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (MainClass.ID Set start)

                // *** End programmer edit section *** (MainClass.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (MainClass.ID Set end)

                // *** End programmer edit section *** (MainClass.ID Set end)
            }
        }

        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {

            /// <summary>
            /// "MainClassE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MainClassE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MainClassE", typeof(IIS.Novyjj_testovyjj.MainClass));
                }
            }

            /// <summary>
            /// "MainClassL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MainClassL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MainClassL", typeof(IIS.Novyjj_testovyjj.MainClass));
                }
            }
        }
    }
}

